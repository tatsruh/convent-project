import {createSlice} from "@reduxjs/toolkit";
import animePic from '../../public/anime-and-manga.svg'
import cartoonPic from '../../public/monkey (1).svg'
import boardPic from '../../public/rolling-dices.svg'
import rpgPic from '../../public/d10.svg'
import fantasyPic from '../../public/brutal-helm.svg'
import comicsPic from '../../public/woman-elf-face.svg'


export type HobbyCard = {
    tag: string;
    url: string;
    id: number;
    checked: boolean;
}
export type Activity = {
    tag: string[];
    description: string;
    day: 'Friday' | 'Saturday';
    id: number;
    time: string;
}

export const hobbiesSlice = createSlice({
    name: 'hobbies',
    initialState: {
        hobbies_cards: [
            {tag: 'Anime', url: animePic, id: 1, checked: false},
            {tag: 'Boardgames', url: boardPic, id: 2, checked: false},
            {tag: 'Fantasy', url: fantasyPic, id: 3, checked: false},
            {tag: 'RPG', url: rpgPic, id: 4, checked: false},
            {tag: 'Comics', url: comicsPic, id: 5, checked: false},
            {tag: 'Cartoons', url: cartoonPic, id: 6, checked: false}
        ] as HobbyCard[],
        activities: [
            {tag: ['Anime', 'RPG'], description: 'Anime Cosplay RPG', day: 'Friday', id: 1, time: '15:00'},
            {tag: ['RPG', 'Comics', 'Fantasy'], description: 'LARP For Comix fans', day: 'Saturday', id: 2, time: '20:00'},
            {tag: ['Anime', 'Fantasy'], description: 'A lecture about Japan', day: 'Friday', id: 3, time: '14:00'},
            {tag: ['Comics', 'Boardgames'], description: 'Playing Card Games', day: 'Saturday', id: 4, time: '13:00'},
            {tag: ['Boardgames', 'RPG'], description: 'Classic RPG Session', day: 'Friday', id: 5, time: '02:00'},
            {tag: ['Cartoons'], description: 'My Little Pony Cosplay', day: 'Friday', id: 6, time: '09:30'},
            {tag: ['Boardgames'], description: 'Playing Monopoly', day: 'Saturday', id: 7, time: '10:00'},
            {tag: ['RPG', 'Boardgames'], description: 'Presentation of a new game', day: 'Saturday', id: 8, time: '21:00'},

        ] as Activity[],
        filteredActivities: [] as Activity[],
        menuIsOpen: false as boolean

    },
    reducers: create => ({

        changeStatus: create.reducer<{ hobbyId: number }>((state, action) => {
            const hobby = state.hobbies_cards.find((h) => h.id === action.payload.hobbyId)
            if (hobby) {
                hobby.checked = !hobby.checked
            }
        }),
        filterActivities: create.reducer<{hobbies: HobbyCard[]}>((state, action) => {
            const activeHobbies = action.payload.hobbies.filter((h) => {
                return h.checked
            }).map((h) => {
                return h.tag
            });

            state.filteredActivities = state.activities.filter(activity =>
                activity.tag.some(tag => activeHobbies.includes(tag))
            ).sort((a, b) => {
                const timeA = new Date('1970-01-01T' + a.time + 'Z');
                const timeB = new Date('1970-01-01T' + b.time + 'Z');
                // @ts-ignore
                return timeA - timeB;
            })
        }),
        changeMenu: create.reducer((state) => {
            state.menuIsOpen = !state.menuIsOpen
        })

    }),
    selectors: {
        selectHobbies: (state) => state.hobbies_cards,
        selectActivities: (state) => state.filteredActivities,
        selectMenu: (state) => state.menuIsOpen

    }
})
export const {changeStatus, filterActivities, changeMenu} = hobbiesSlice.actions;
export const hobbiesReducer = hobbiesSlice.reducer;
export const {selectHobbies, selectActivities, selectMenu} = hobbiesSlice.selectors;
