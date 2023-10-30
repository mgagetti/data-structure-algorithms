const groupBy = key => array => {
    return array.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        
        return acc;
    }, {});
};
  
const groupByYear = groupBy("year");
groupByyear(albums);

const groupByArtist = groupBy("artist");
groupByArtist(albums);