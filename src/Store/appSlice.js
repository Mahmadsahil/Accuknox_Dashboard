import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        formDisplay: false,
        data: {
            categories: [
                {
                    id: 1,
                    name: "Shirts",
                    widgets: [
                        {
                            id: "232EP1",
                            name: "Casual Comfort Tee",
                            description: "A soft, breathable tee perfect for everyday wear."
                        },
                        {
                            id: "232EP2",
                            name: "Vintage Vibes Polo",
                            description: "A classic polo with a retro twist for timeless style."
                        }
                    ]
                },
                {
                    id: 2,
                    name: "T-Shirts",
                    widgets: [
                        {
                            id: "232EP3",
                            name: "Classic Cotton Crew",
                            description: "The ultimate basic tee, made from premium cotton."
                        }
                    ]
                },
                {
                    id: 3,
                    name: "Pants",
                    widgets: [
                        {
                            id: "232EP6",
                            name: "Relaxed Fit Jeans",
                            description: "Comfortable jeans with a relaxed, casual vibe."
                        },
                        {
                            id: "232EP5",
                            name: "Slim Fit Chinos",
                            description: "Versatile chinos with a modern slim fit."
                        },
                        {
                            id: "232EP6",
                            name: "Relaxed Fit Jeans",
                            description: "Comfortable jeans with a relaxed, casual vibe."
                        }
                    ]
                },
                {
                    id: 4,
                    name: "Shorts",
                    widgets: [
                        {
                            id: "232EP7",
                            name: "Beachside Boardshorts",
                            description: "Perfect for the beach, these shorts are quick-drying and stylish."
                        },
                        {
                            id: "232EP8",
                            name: "Athletic Mesh Shorts",
                            description: "Lightweight shorts ideal for sports and exercise."
                        }
                    ]
                }
            ]
        },
        searchKeyword: "",
        activeCategory: "Shirts",
        widgetsShow: false,

    },
    reducers: {

        OpenFormDisplay: (state, action) => {
            state.formDisplay = {
                CategoryName: action.payload,
                show: true
            }
        },
        CloseFormDisplay: (state) => {
            state.formDisplay.show = false
        },
        AddWidget: (state, action) => {
            const { categoryName, newWidget } = action.payload;

            const category = state.data.categories.find(cat => cat.name === categoryName);

            if (category) {
                category.widgets.push(newWidget);
            }
        },
        RemoveWidget: (state, action) => {
            const { categoryName, widgetName } = action.payload;

            const category = state.data.categories.find(cat => cat.name === categoryName);

            if (category) {
                category.widgets = category.widgets.filter(widget => widget.name !== widgetName);
            }
        },
        SearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        },
        FilterWidgets: (state) => {
            const keyword = state.searchKeyword.toLowerCase();
            state.data.categories = state.data.categories.map(category => ({
                ...category,
                widgets: category.widgets.filter(widget =>
                    widget.name.toLowerCase().includes(keyword)
                )
            }));
        },
        SetActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },
        ShowWidgets: (state, action) => {
            state.widgetsShow = true;
        },
        CloseWidgets: (state, action) => {
            state.widgetsShow = false;
        },
    }
})

export const { OpenFormDisplay, CloseFormDisplay, AddWidget, RemoveWidget, SearchKeyword, FilterWidgets, SetActiveCategory, ShowWidgets, CloseWidgets } = appSlice.actions;
export default appSlice.reducer;