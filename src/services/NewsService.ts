/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewsArticle, ArticleType } from '../types';

class NewsService {
  getArticlesByType(articleType: ArticleType): Promise<NewsArticle[]> {
    return fetch('/data/articles.json')
      .then((response) => response.json())
      .then((articles) => {
        const newsArticles = articles
          .filter((article: any) => article.articleType === articleType)
          .map((article: any) => ({
            id: article.id,
            title: article.title,
            content: article.content,
            dateString: article.dateString,
            baseImageName: article.baseImageName,
            articleType: article.articleType,
            isFavourite: article.isFavourite,
          } as NewsArticle));

        return newsArticles;
      });
  }
}

export default new NewsService();
