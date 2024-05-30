const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favourite : [],
      baseUrl: "https://www.swapi.tech/api/",
      imageUrl : "https://starwars-visualguide.com/#/characters/1",
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getStarShipData : async (uid) => {
        
        try {
          const resp = await fetch(`${getStore().baseUrl}starships/${uid}`);
          const data = await resp.json();
          console.log("get starship =====>", data);
          setStore({ starship : data.result.properties });
        } catch (error) {
          console.log("error getting starship", error);
        }
      },
      getStarShip : async () => {
        try {
          const resp = await fetch(`${getStore().baseUrl}/starships`);
          const data = await resp.json();
          console.log("get starships =====>", data);
          setStore({ starships: data.results });
        } catch (error) {
          console.log("error getting starship", error);
        }},

       
      
      getPlanetData: async (uid) => {
        
        try {
          const resp = await fetch(`${getStore().baseUrl}planets/${uid}`);
          const data = await resp.json();
          console.log("get planet", data);
          setStore({ planet: data.result.properties });
        } catch (error) {
          console.log("error getting planet", error);
        }
      },
      getPlanect : async () => {
        try {
          const resp = await fetch(`${getStore().baseUrl}/planets`);
          const data = await resp.json();
          console.log("get planet", data);
          setStore({ planets: data.results });
        } catch (error) {
          console.log("error getting charactor", error);
        }},

      getCharactorData: async (uid) => {
        try {
          const resp = await fetch(`${getStore().baseUrl}/people/${uid}`);
          const data = await resp.json();
          console.log("get charactor", data);
          setStore({ character: data.result.properties });
        } catch (error) {
          console.log("error getting charactor", error);
        }
      },

      getCharactor: async () => {
        try {
          const resp = await fetch(`${getStore().baseUrl}/people/`);
          const data = await resp.json();
          console.log("get charactor", data);
          setStore({ people: data.results });
        } catch (error) {
          console.log("error getting charactor", error);
        }
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      addFav : (fav) => {
        let exist = getStore().favourite.filter( el => el.name === fav.name)
    if ( exist.length === 0) {

      setStore({favourite : [...getStore().favourite , fav]})

    }else {
      setStore({favourite : getStore().favourite.filter(el => el.name !== fav.name)})
    }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
