import { styled } from "@mui/material";

import { Box, Toolbar, Typography, Card, Grid } from "@mui/material";

import { mediaQuery as mq } from "./constants";

export const NavBar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    opacity: 0.97,
    display: "flex",
    justifyContent: "space-between",

    "a": {
        color: theme.palette.primary.contrastText,
    },

    [mq[2]]: {
        display: "none",
    }
}))

export const MobileNavBar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    opacity: 0.97,
    display: "flex",
    justifyContent: "space-between",

    "a": {
        color: theme.palette.primary.contrastText,
    },

    "@media (min-width: 993px)": {
        display: "none",
    }
}))

export const Logo = styled(Typography)(() => ({
    
}))

export const MainContent = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(8),
    height: "90vh",
    color: theme.palette.primary.contrastText,

    [mq[2]]: {
        flexDirection: "row",
        gap: theme.spacing(2),
        height: theme.spacing(100),

        ">div:last-child": {
            textAlign: "center",
        }
    },

    [mq[1]]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: theme.spacing(0),

        ">div:last-child": {
            textAlign: "center",
            
            "img": {
                width: "80%",
            }
        }
    },

    [mq[0]]: {
        flexDirection: "column",
        justifyContent: "center",
        gap: theme.spacing(4),
        marginTop: theme.spacing(2),

        ">div:last-child": {
            textAlign: "center",
            
            "img": {
                width: "80%",
            }
        }
    }
}))

export const AboutMe = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 4),

    "div": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(4),
        
        "&:last-child": {
            color: theme.palette.primary.contrastText,
            textAlign: "center",
        },
    },

    [mq[2]]: {
        flexDirection: "column-reverse",

        fontSize: theme.spacing(2),
   
    },

    [mq[1]]: {
        flexDirection: "column-reverse",
        fontSize: theme.spacing(2),

        "img": {
            display: "none",
        }
    },

    [mq[0]]: {
        flexDirection: "column-reverse",
        fontSize: theme.spacing(2),

        "img": {
            display: "none",
        }
    }
}))

export const AboutMeText = styled(Typography)(({theme}) => ({

    lineHeight: 2,

    [mq[2]]: {
        fontSize: theme.spacing(2),
    },

    [mq[1]]: {
        fontSize: theme.spacing(2),
    },

    [mq[0]]: {
        fontSize: theme.spacing(2),
    },
}))

export const Skills = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: theme.spacing(10),

    "div": {
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(4),
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(2),
    },

    [mq[2]]: {

        "div": {
            flexWrap: "wrap",
            justifyContent: "center",
            gap: theme.spacing(2),
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(1),
        }
    }
}))

export const SkillCard = styled("a")(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(12),

    cursor: "pointer",
    transition: "1s",

    "&:hover": {
        color: theme.palette.primary.main,
        transition: "0.2s",
    },

    [mq[2]]: {
        width: theme.spacing(10),
    }
}))

export const SkillTitle = styled(Typography)(({theme}) => ({

    marginTop: theme.spacing(1),
    display: "flex",
    textAlign: "center",
    justifyContent: "center",

    [mq[2]]: {
        width: theme.spacing(8),
    }
}))

export const Portfolio = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,

    "@media (max-width: 993px)": {
        display: "none",
    }
}))

export const PortfolioGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: theme.palette.secondary.light,
}))

export const MobilePortfolio = styled(Box)(({theme}) => ({
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,

    [mq[2]]: {
        display: "flex",
    },
}))

export const MobilePortfolioGrid = styled(Grid)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: theme.palette.secondary.light,
}))

export const ProjectCard = styled(Card)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: theme.palette.secondary.light,
}))

export const Contact = styled(Box)(({theme}) => ({
    color: theme.palette.primary.contrastText,

    "div": {
        height: theme.spacing(82),
    },


    [mq[2]]: {

        
        "div": {
            height: theme.spacing(60),
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",

            "div": {
                height: "100%",
                alignItems: "center",
            }
        }
    }
}))

export const ContactContent = styled("a")(({theme}) => ({
    display: 'flex',
    gap: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    transition: "0.2s",

    "&:hover": {
        color: theme.palette.primary.main,
    }
}))

export const NavBorder = styled("span")<{left : number, width : number}>(({theme, left, width}) => ({
    backgroundColor: theme.palette.primary.contrastText,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    borderRadius: "1px",
    width: width,
    position: "absolute",
    left: left,
    bottom: "0",
    transition: "0.3s",
}))

export const Footer = styled(Box)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    height: theme.spacing(14),
    alignItems: 'center',
    gap: theme.spacing(1),
    

    [mq[2]]: {
        height: theme.spacing(10),
    }
}))