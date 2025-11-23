import { motion } from 'framer-motion';

export const CodeWindow = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block w-full max-w-lg rounded-xl overflow-hidden bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
        >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 text-xs text-zinc-500 font-mono">PortfolioService.java</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="flex">
                    <div className="flex flex-col text-zinc-600 select-none pr-4 text-right border-r border-white/5 mr-4">
                        <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                    </div>
                    <div className="text-zinc-300">
                        <div><span className="text-purple-400">@Service</span></div>
                        <div><span className="text-purple-400">public class</span> <span className="text-yellow-200">PortfolioService</span> <span className="text-zinc-500">{'{'}</span></div>
                        <div className="h-4" />
                        <div className="pl-4"><span className="text-purple-400">public</span> <span className="text-yellow-200">Project</span> <span className="text-blue-400">create</span>(<span className="text-yellow-200">String</span> <span className="text-orange-300">idea</span>) <span className="text-zinc-500">{'{'}</span></div>
                        <div className="pl-8"><span className="text-purple-400">return</span> <span className="text-yellow-200">Project</span>.<span className="text-blue-400">builder</span>()</div>
                        <div className="pl-12">.<span className="text-blue-400">name</span>(<span className="text-orange-300">idea</span>)</div>
                        <div className="pl-12">.<span className="text-blue-400">status</span>(<span className="text-yellow-200">Status</span>.<span className="text-purple-400">IN_PROGRESS</span>)</div>
                        <div className="pl-12">.<span className="text-blue-400">build</span>();</div>
                        <div className="pl-4"><span className="text-zinc-500">{'}'}</span></div>
                        <div><span className="text-zinc-500">{'}'}</span></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
