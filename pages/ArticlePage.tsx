import React from 'react';
import { TopBanner } from '../components/TopBanner';
import { Header } from '../components/Header';
import { Article } from '../components/Article';
import { Sidebar } from '../components/Sidebar';
import { StickyCTA, ProductBlock } from '../components/StickyCTA';
import { Comments } from '../components/Comments';
import { Footer } from '../components/Footer';

export const ArticlePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <TopBanner />
            <Header />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8">
                            <Article />
                            <ProductBlock />
                        </div>

                        {/* Sidebar */}
                        <aside className="hidden lg:block lg:col-span-4 space-y-8">
                            <Sidebar />
                        </aside>
                    </div>
                </div>

                <Comments />
            </main>

            <Footer />
            <StickyCTA />
        </div>
    );
};
