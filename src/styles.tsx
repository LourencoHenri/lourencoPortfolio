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

    [mq[0]]: {
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

    "@media (min-width: 576px)": {
        display: "none",
    }
}))

export const Logo = styled(Typography)(() => ({
    
}))

export const MainContent = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "95vh",
    color: theme.palette.primary.contrastText,

    [mq[0]]: {
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",

        ">div:last-child": {
            textAlign: "center",

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

    [mq[0]]: {
        flexDirection: "column",

        "img": {
            display: "none",
        }

    }
}))

export const Skills = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingTop: theme.spacing(8),

    "div": {
        color: theme.palette.primary.contrastText,
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(4),
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(2),
    },

    [mq[0]]: {

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

    "span": {
        marginTop: theme.spacing(1),
        textAlign: "center",
    },

    [mq[0]]: {
        width: theme.spacing(8),
    }
}))

export const Portfolio = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
}))

export const PortfolioGrid = styled(Grid)(({theme}) => ({
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
    paddingTop: theme.spacing(16),
    marginBottom: theme.spacing(26),

    [mq[0]]: {
        
        ">div": {
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: theme.spacing(10),

            "div": {
                alignItems: "center",
                textAlign: "center",
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

export const Footer = styled(Box)(({theme}) => ({
    color: theme.palette.primary.contrastText,
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