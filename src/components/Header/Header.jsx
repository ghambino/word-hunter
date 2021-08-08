import React from 'react'
import "./header.css"
import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core'
import categories from '../../utils/categoryData'

const Header = ({ lightMode, word, setWord, selectedCategory, setSelectedCategory }) => {
   
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode ? "#000" : "#fff"
            },
            type: lightMode ? "light" : "dark"
        },
    });

    const handleOnSelect = (e) => {
        setSelectedCategory(e.target.value);
        setWord("")
    }

   
    return (
        <>
        <div className="header">
            <span className="title">word hunter</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        required
                        className="searchfield"
                        label="Search a word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />

                    <TextField
                        className="selectField"
                        select
                        label="Select"
                        value={selectedCategory}
                        onChange={handleOnSelect}
                        helperText="Select preferred language"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>

            </div>
        </div>
        </>
    )
}

export default Header
