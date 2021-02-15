import "./App.css";
import React, { Component } from "react";
import Boss from "./Boss.js";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    bosses: [
      {
        name: "Herszt",
        iconSrc: "https://wiki.taern.pl/images//b/ba/Herszt.jpg",
        taernWikiUrl: "https://wiki.taern.pl/index.php?title=Herszt",
        items: [
          {
            name: "Derengil",
            id: 1001,
            taernWikiUrl: "https://wiki.taern.pl/images//0/0e/Derengil.jpg",
            ranga: 5,
            esencjeBezInhibitora: 4,
            esencjeZInhibitorem: 6,
            zyskZesencjiMin: 60000,
            zyskZesencjiMax: 130000,
            cenaRynkowaMin: 100000,
            cenaRynkowaMax: 200000,
            dodatkowyOpis:
              "Ponieważ Herszt nie dropi epików, a rary z niego dają mało esencji, farmią go tylko nieliczni gracze. Dlatego mimo iż rary są bardzo tanie, trudno spotkać je na czacie handlowym.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Maiarot",
            id: 1002,
            taernWikiUrl: "https://wiki.taern.pl/images//e/e0/Maiarot.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 70000,
            cenaRynkowaMax: 70000,
            dodatkowyOpis:
              "Ponieważ Herszt nie dropi epików, a rary z niego dają mało esencji, farmią go tylko nieliczni gracze. Dlatego mimo iż rary są bardzo tanie, trudno spotkać je na czacie handlowym.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfo: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Sturprang",
            id: 1003,
            taernWikiUrl: "https://wiki.taern.pl/images//5/59/Sturprang.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 20000,
            cenaRynkowaMax: 30000,
            dodatkowyOpis:
              "Ponieważ Herszt nie dropi epików, a rary z niego dają mało esencji, farmią go tylko nieliczni gracze. Dlatego mimo iż rary są bardzo tanie, trudno spotkać je na czacie handlowym.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
        ],
      },
      {
        name: "Krzyżak",
        iconSrc: "https://wiki.taern.pl/images//4/40/Krzy%C5%BCak.jpg",
        taernWikiUrl: "https://wiki.taern.pl/index.php?title=Krzy%C5%BCak",
        items: [
          {
            name: "Martumal",
            id: 1004,
            taernWikiUrl: "https://wiki.taern.pl/images//4/4b/Martumal.jpg",
            ranga: 5,
            esencjeBezInhibitora: 4,
            esencjeZInhibitorem: 6,
            zyskZesencjiMin: 60000,
            zyskZesencjiMax: 130000,
            cenaRynkowaMin: 100000,
            cenaRynkowaMax: 200000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Arcanescape II",
            id: 1005,
            taernWikiUrl: "https://wiki.taern.pl/images//d/de/Arcanscape.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 70000,
            cenaRynkowaMax: 70000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Ayol",
            id: 1006,
            taernWikiUrl: "https://wiki.taern.pl/images//a/a9/Ayol.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 20000,
            cenaRynkowaMax: 30000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
        ],
      },
      {
        name: "Ichtion",
        iconSrc: "https://wiki.taern.pl/images//5/51/Ichtion.jpg",
        taernWikiUrl: "https://wiki.taern.pl/index.php?title=Ichtion",
        items: [
          {
            name: "Czengsvesy",
            id: 1007,
            taernWikiUrl: "https://wiki.taern.pl/images//a/a8/Czengsvesy.jpg",
            ranga: 5,
            esencjeBezInhibitora: 4,
            esencjeZInhibitorem: 6,
            zyskZesencjiMin: 60000,
            zyskZesencjiMax: 130000,
            cenaRynkowaMin: 100000,
            cenaRynkowaMax: 200000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Fiskorl II",
            id: 1008,
            taernWikiUrl: "https://wiki.taern.pl/images//7/71/Fiskorl.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 70000,
            cenaRynkowaMax: 70000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
          {
            name: "Rolrak",
            id: 1009,
            taernWikiUrl: "https://wiki.taern.pl/images//a/a7/Rolrak.jpg",
            ranga: 4,
            esencjeBezInhibitora: 1,
            esencjeZInhibitorem: 1,
            zyskZesencjiMin: 0,
            zyskZesencjiMax: 5000,
            cenaRynkowaMin: 20000,
            cenaRynkowaMax: 30000,
            dodatkowyOpis: "rzadki rar.",
            isItemDescribeShown: false,
            historiaTransakcji: [
              {
                data: "styczeń 2021",
                wytrzymalosc: 45,
                iloscGwiazdek: null,
                cena: 50000,
                dodatkoweInfoOTransakcji: "Dla znajomego.",
              },
            ],
          },
        ],
      },
    ],
  };

  handleShowItemDescribeClick = (event) => {
    // console.log("wywołano funkcję na id: " + event.target.id);

    const bosses = this.state.bosses.map((boss) => {
      // console.log("boss: " + boss.name);
      boss.items.map((item) => {
        // console.log("item: " + item.name);
        if (parseInt(event.target.id) === item.id) {
          item.isItemDescribeShown = !item.isItemDescribeShown;
          // console.log("znaleziono matched id: " + event.target.id);
        }
        return item;
      });
      return boss;
    });

    this.setState({
      bosses,
    });
  };

  render() {
    return (
      <div className="bossSection">
        <Boss
          bosses={this.state.bosses}
          handleShowItemDescribeClick={this.handleShowItemDescribeClick}
        />
      </div>
    );
  }
}

export default App;
