import styles from '../../styles/News.module.css';

export const News = ({ pageNumber, articles }) => {
  return (
    <div className={styles.main}>
      {articles.map((article, index) => (
        <div key={index} className={styles.post}>
          <h1 onClick={() => (window.location.href = article.url)}>
            {article.title}
          </h1>
          <p>{article.description}</p>
          {!!article.urlToImage && <img src={article.urlToImage} />}
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pageId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=(+craft AND +beer)&pageSize=6&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_KEY_BEER_NEWS}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default News;
