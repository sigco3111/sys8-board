import React, { useState } from 'react';
import type { UIPost } from '../src/types';
import PostItem from './PostItem';
import { SearchIcon } from './icons';

interface PostListProps {
  posts: UIPost[];
  selectedPost: UIPost | null;
  onSelectPost: (post: UIPost) => void;
  loading?: boolean;
  error?: React.ReactNode;
  searchTerm?: string;
  onSearch?: (term: string) => void;
}

const PostList: React.FC<PostListProps> = ({ 
  posts, 
  selectedPost, 
  onSelectPost, 
  loading, 
  error,
  searchTerm = '',
  onSearch 
}) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  // 검색어 입력 핸들러
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0 mac-window flex flex-col h-full">
      {/* 검색창 추가 */}
      <div className="p-3 border-b border-mac-border">
        <div className="relative flex items-center">
          <SearchIcon className="w-5 h-5 text-slate-400 absolute left-3" />
          <input
            type="text"
            value={inputValue}
            onChange={handleSearchInputChange}
            placeholder="게시물 검색..."
            className="w-full py-2 pl-10 pr-4 mac-input"
          />
        </div>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="mac-loading"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 p-8">
          {error}
        </div>
      ) : (
        <ul className="overflow-y-auto flex-grow mac-os8-scrollbar">
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                isSelected={selectedPost && post.id === selectedPost.id}
                onClick={() => onSelectPost(post)}
              />
            ))
          ) : (
            <div className="text-center text-slate-500 p-8">
              {inputValue ? `'${inputValue}'에 대한 검색 결과가 없습니다.` : '게시물이 없습니다.'}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default PostList;
