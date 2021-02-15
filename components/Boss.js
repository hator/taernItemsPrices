import Item from "./Item.js";

const Boss = (props) => {
  return props.bosses.map((boss, index) => {
    return (
      <div className="container bossContainer" key={index}>
        <div className="row">
          <div className="col-2 bossInfo">
            <div>
              <img src={boss.iconSrc} />
              <span>
                <a href={boss.taernWikiUrl} target="_blank">
                  <strong>{boss.name}</strong>
                </a>
              </span>
            </div>
          </div>
          <div className="col-10 bossItems">
            <div className="row">
              {boss.items.map((item, index) => {
                return (
                  <Item
                    key={index}
                    index={index}
                    taernWikiUrl={item.taernWikiUrl}
                    name={item.name}
                    ranga={item.ranga}
                    esencjeBezInhibitora={item.esencjeBezInhibitora}
                    esencjeZInhibitorem={item.esencjeZInhibitorem}
                    zyskZesencjiMin={item.zyskZesencjiMin}
                    zyskZesencjiMax={item.zyskZesencjiMax}
                    cenaRynkowaMin={item.cenaRynkowaMin}
                    cenaRynkowaMax={item.cenaRynkowaMax}
                    id={item.id}
                    isItemDescribeShown={item.isItemDescribeShown}
                    dodatkowyOpis={item.dodatkowyOpis}
                    item={item}
                    handleShowItemDescribeClick={
                      props.handleShowItemDescribeClick
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Boss;
