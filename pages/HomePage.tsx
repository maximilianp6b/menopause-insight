import React from 'react';
import { TopBanner } from '../components/TopBanner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, BookOpen, Sparkles, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <TopBanner />
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-white border-b border-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Featured Research</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                                    Empowering Women Through The <span className="text-brand-600">Menopause Journey</span>
                                </h1>
                                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                    Science-backed insights, expert advice, and personalized solutions to help you navigate perimenopause and menopause with confidence.
                                </p>
                                <Link
                                    to="/the-menopause-gap"
                                    className="inline-flex items-center px-8 py-4 bg-brand-600 text-white rounded-lg font-bold text-lg hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                                >
                                    Read Featured Article
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                    <img
                                        src="https://picsum.photos/seed/menopausehero/800/1000"
                                        alt="Menopause Support"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <p className="text-sm font-bold uppercase tracking-widest mb-2 text-brand-200">Latest Report</p>
                                        <h3 className="text-2xl font-bold font-serif">The "4-Hour Gap" Leaving Millions of Women in Limbo</h3>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block animate-bounce-slow">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">Expert Verified</p>
                                            <p className="text-xs text-slate-500">Science-based content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Grid */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Latest Insights</h2>
                        <div className="h-px bg-slate-200 flex-grow mx-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Main Article Card */}
                        <ArticleCard
                            image="https://picsum.photos/seed/article1/600/400"
                            category="Special Report"
                            title="The Menopause Gap: Why Your Doctor Is Missing The Signs"
                            excerpt="If you're feeling 'off' but your labs are normal, you aren't crazy. You might be falling into the medical gap."
                            link="/the-menopause-gap"
                            featured
                        />

                        {/* Placeholder Article 1 */}
                        <ArticleCard
                            image="https://picsum.photos/seed/article2/600/400"
                            category="Wellness"
                            title="Harnessing Nature: The Best Herbs for Hormonal Balance"
                            excerpt="Discover the top-rated natural ingredients that are transforming the menopause journey for thousands."
                            placeholder
                        />

                        {/* Placeholder Article 2 */}
                        <ArticleCard
                            image="https://picsum.photos/seed/article3/600/400"
                            category="Lifestyle"
                            title="Sleep Better, Live Better: Post-Menopause Solutions"
                            excerpt="Practical tips and strategies to reclaim your sleep and energy levels during the transition."
                            placeholder
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

const ArticleCard: React.FC<{
    image: string;
    category: string;
    title: string;
    excerpt: string;
    link?: string;
    featured?: boolean;
    placeholder?: boolean;
}> = ({ image, category, title, excerpt, link, featured, placeholder }) => (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col group ${placeholder ? 'opacity-75 grayscale-[20%]' : ''}`}>
        <div className="aspect-video relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900">
                {category}
            </div>
            {placeholder && (
                <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center">
                    <span className="bg-white/90 px-4 py-2 rounded-lg text-xs font-bold text-slate-900 shadow-sm">Coming Soon</span>
                </div>
            )}
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                {excerpt}
            </p>
            {link ? (
                <Link to={link} className="inline-flex items-center text-brand-600 font-bold text-sm">
                    Read Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            ) : (
                <span className="text-slate-400 font-bold text-sm flex items-center">
                    <BookOpen className="mr-2 w-4 h-4" />
                    Member Exclusive
                </span>
            )}
        </div>
    </div>
);
