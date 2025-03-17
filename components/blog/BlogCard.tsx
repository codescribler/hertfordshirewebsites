import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, formatDate } from '@/lib/blog';
import CategoryBadge from './CategoryBadge';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';
  
  return (
    <div className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${isFeatured ? 'h-full' : ''}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className={`relative ${isCompact ? 'aspect-[16/9]' : 'aspect-[16/10]'} w-full`}>
          <Image 
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {isFeatured && (
            <div className="absolute top-4 left-4 bg-secondary-500 text-white text-xs py-1 px-2 rounded">
              Featured
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 flex space-x-2">
            <CategoryBadge category={post.category} />
            {post.readTime && (
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded">
                {post.readTime} min read
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="text-gray-500 text-sm mb-2">{formatDate(post.date)}</div>
        
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className={`font-bold text-primary-800 mb-3 group-hover:text-primary-600 transition-colors ${isFeatured ? 'text-2xl' : isCompact ? 'text-lg' : 'text-xl'}`}>
            {post.title}
          </h3>
        </Link>
        
        {!isCompact && (
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">
            {post.description}
          </p>
        )}
        
        <Link 
          href={`/blog/${post.slug}`}
          className="text-secondary-500 font-medium text-sm inline-flex items-center group-hover:text-secondary-600"
        >
          Read more 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
