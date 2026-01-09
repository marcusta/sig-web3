import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  backgroundImage?: string;
}

export function PageHeader({ title, subtitle, className, backgroundImage }: PageHeaderProps) {
  return (
    <div className={cn("relative py-16 md:py-32 bg-slate-900 overflow-hidden", className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
