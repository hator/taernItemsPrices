const Item = (props) => {
  return (
    <table className="item">
      <tbody>
        <tr>
          <ItemTitle taernWikiUrl={props.taernWikiUrl} name={props.name} />
        </tr>
        <tr>
          <ItemInfo
            ranga={props.ranga}
            esencjeBezInhibitora={props.esencjeBezInhibitora}
            esencjeZInhibitorem={props.esencjeZInhibitorem}
            zyskZesencjiMin={props.zyskZesencjiMin}
            zyskZesencjiMax={props.zyskZesencjiMax}
            cenaRynkowaMin={props.cenaRynkowaMin}
            cenaRynkowaMax={props.cenaRynkowaMax}
          />
        </tr>
        <tr>
          <ItemDescribe
            id={props.id}
            isItemDescribeShown={props.isItemDescribeShown}
            dodatkowyOpis={props.dodatkowyOpis}
            handleShowItemDescribeClick={props.handleShowItemDescribeClick}
          />
        </tr>
        <tr className="transactions-row">
          <ItemTransactionsHistory item={props.item} />
        </tr>
      </tbody>
    </table>
  );
};

const ItemTitle = (props) => {
  return (
    <th>
      <div className="item-img">
        <img src={props.taernWikiUrl} />
      </div>
      <span>{props.name}</span>
    </th>
  );
};

const ItemInfo = (props) => {
  return (
    <td>
      <ul className="itemInfo">
        <li>Ranga: {props.ranga}</li>
        <li>Esek bez inhibitora: {props.esencjeBezInhibitora}</li>
        <li>Esek z inhibitorem: {props.esencjeZInhibitorem}</li>
        <li>
          Zysk jeśli przetopimy na eski: {props.zyskZesencjiMin} -{" "}
          {props.zyskZesencjiMax}
        </li>
        <li>
          Cena rynkowa: {props.cenaRynkowaMin} - {props.cenaRynkowaMax}
        </li>
      </ul>
    </td>
  );
};

const ItemDescribe = (props) => {
  return (
    <td>
      <button
        className="item-describe-btn"
        id={props.id}
        onClick={props.handleShowItemDescribeClick}
        // aria-controls="example-collapse-text"
      >
        Dodatkowy opis:{" "}
      </button>
      {props.isItemDescribeShown ? (
        <span className="new-line">{props.dodatkowyOpis}</span>
      ) : null}
    </td>
  );
};

const ItemTransactionsHistory = (props) => {
  return (
    <td>
      Historia transakcji:
      <ul className="transactions">
        {props.item.historiaTransakcji.map((transakcja, index) => {
          return (
            <li key={index}>
              {transakcja.data}, {transakcja.wytrzymalosc}% -
              {transakcja.iloscGwiazdek ? transakcja.iloscGwiazdek + ", " : " "}
              {transakcja.cena}
              {transakcja.dodatkoweInfo
                ? " (" + transakcja.dodatkoweInfo + ")"
                : null}
            </li>
          );
        })}
      </ul>
    </td>
  );
};

export default Item;
