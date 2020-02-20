<template>

  <div>
    <NewsList :newsArticles="newsArticles"></NewsList>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsService from '../services/NewsService';
import NewsList from '../components/NewsList.vue';
import { ArticleType, NewsArticle } from '../types';

@Component({
  components: {
    NewsList,
  },
})
export default class TopStories extends Vue {
  newsArticles: NewsArticle[] = [];

  mounted() {
    NewsService.getArticlesByType(ArticleType.TopStory)
      .then((newsArticles: NewsArticle[]) => {
        this.newsArticles = newsArticles;
      });
  }
}
</script>
