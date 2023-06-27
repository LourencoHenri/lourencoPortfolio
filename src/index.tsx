import {
	AppBar,
	Box,
	Button,
	Container,
	Grid,
	Menu,
	MenuItem,
	Typography,
	Drawer,
	List,
	ListItem,
	Divider,
} from "@mui/material";
import { theme } from "./types/theme";

import logo from "../public/logo.svg";
import computer from "../src/assets/computer.gif";
import developer from "../src/assets/developer.gif";
import english from "../src/assets/englishIcon.png";
import spanish from "../src/assets/spanishIcon.png";
import portuguese from "../src/assets/portugueseIcon.png";

import curriculumHenriqueLourenco from "../src/assets/curriculumHenriqueLourenco.pdf";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";

import {
	SiTypescript,
	SiReact,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiGithub,
	SiGit,
	SiStyledcomponents,
	SiSass,
	SiNextdotjs,
	SiMui,
	SiBootstrap,
	SiTailwindcss,
	SiFigma,
} from "react-icons/si";

import React, { forwardRef, useEffect } from "react";

import { Link, Element } from "react-scroll";

import {
	Logo,
	NavBar,
	MainContent,
	AboutMe,
	Skills,
	SkillCard,
	Portfolio,
	ProjectCard,
	Contact,
	ContactContent,
	Footer,
	MobileNavBar,
	SkillTitle,
	AboutMeText,
	MobilePortfolio,
} from "./styles";

import { useTranslation } from "react-i18next";

// INTERFACE
interface PortfolioProps {
	id: number;
	name: string;
	description: string;
	gitHubUrl: string;
	siteUrl: string;
	image: string;
}

interface LanguagesProps {
	id: string;
	name: string;
	image: string;
}

export function Home() {
	const portfolio: PortfolioProps[] = [
		{
			id: 1,
			name: "Coffee Shop",
			description:
				"Sales system of a cafeteria. Allows for order control, providing an efficient solution for operation and administration.",
			gitHubUrl: "https://github.com/LourencoHenri/coffeeShop",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/fundo-de-armazenamento-em-nuvem-remixado-do-dominio-publico-pela-nasa_53876-104240.jpg?w=1390&t=st=1684722928~exp=1684723528~hmac=65d58cea32c3485f3fb2a0c59247290c29e6318a1945851dd8b8739441750006",
		},
		{
			id: 2,
			name: "Pomodoro Timer",
			description:
				"Pomodoro Timer application that assists in time management and productivity enhancement, following the Pomodoro technique of work and break cycles.",
			gitHubUrl: "https://github.com/LourencoHenri/pomodoroTimer",
			siteUrl: "",
			image:
				"https://img.freepik.com/vetores-gratis/fundo-de-tecnologia-de-rede-5g-com-linha-digital-azul_53876-119505.jpg?size=626&ext=jpg&ga=GA1.1.1049139390.1684335736&semt=sph",
		},
		{
			id: 3,
			name: "Feed",
			description:
				"Implements a feed system, allowing the display and sharing of content such as posts and comments in an organized and interactive manner.",
			gitHubUrl: "https://github.com/LourencoHenri/feed",
			siteUrl: "https://lourencohenri.github.io/feed/",
			image:
				"https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=1390&t=st=1684722782~exp=1684723382~hmac=a272128d1cea39a87a6a828d5adf4a3e423341028b2b972dd6d30cef041da769",
		},
		{
			id: 4,
			name: "ToDo List",
			description:
				"Task list application, allowing users to create, organize, and manage their tasks efficiently and conveniently.",
			gitHubUrl: "https://github.com/LourencoHenri/toDoList",
			siteUrl: "https://lourencohenri.github.io/toDoList/",
			image:
				"https://img.freepik.com/fotos-gratis/fundo-de-programacao-com-html_23-2150038863.jpg?size=626&ext=jpg&ga=GA1.2.1049139390.1684335736&semt=sph",
		},
		{
			id: 5,
			name: "Shop",
			description:
				"The project encompasses everything from the user interface to order processing and payments, providing a comprehensive solution for the online shopping experience.",
			gitHubUrl: "https://github.com/LourencoHenri/Shop",
			siteUrl: "https://shop-bice-theta.vercel.app/",
			image:
				"https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?w=1390&t=st=1684722821~exp=1684723421~hmac=4fbedd7d45fc5efd3d695757896b8da9538913d8ad67878f02532085a12fca68",
		},
		{
			id: 6,
			name: "Calculator",
			description:
				"The project offers an intuitive and user-friendly interface for performing both basic and complex operations, including standard and scientific modes.",
			gitHubUrl: "https://github.com/LourencoHenri/calculator",
			siteUrl: "",
			image:
				"https://img.freepik.com/fotos-gratis/programador-profissional-trabalhando-ate-tarde-no-escritorio-escuro_1098-18705.jpg?w=1390&t=st=1684722836~exp=1684723436~hmac=c3d5dbb990c23f0116b61052573978690abd97b7430deb83b04bef66b092b5a7",
		},
	];

	const languages: LanguagesProps[] = [
		{
			id: "en-US",
			name: "english",
			image: english,
		},
		{
			id: "es-ES",
			name: "spanish",
			image: spanish,
		},
		{
			id: "pt-BR",
			name: "portuguese",
			image: portuguese,
		},
	];

	const [navValue, setNavValue] = React.useState("Home");
	const [languageMenuIsOpen, setLanguageMenuIsOpen] =
		React.useState<null | HTMLElement>(null);
	const [drawerState, setDrawerState] = React.useState(false);
	const [currentLanguage, setCurrentLanguage] = React.useState<null | string>(
		"en-US"
	);
	const openLanguageMenu = Boolean(languageMenuIsOpen);

	const handleNavChange = (
		event: React.SyntheticEvent,
		newNavValue: string
	) => {
		console.log(event);
		setNavValue(newNavValue);
	};

	const scrollHandleChangeTab = (tab: string) => {
		setNavValue(tab);
	};

	const StyledTab = forwardRef((props: any) => (
		<Link
			to={props.to}
			spy={true}
			smooth={false}
			onSetActive={scrollHandleChangeTab}
			{...props}
		>
			<Typography>{props.tabName}</Typography>
		</Link>
	));

	const { t, i18n } = useTranslation();

	const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
		setLanguageMenuIsOpen(event.currentTarget);
	};
	const handleCloseLanguageMenu = () => {
		setLanguageMenuIsOpen(null);
	};

	function toggleNavDrawer() {
		setDrawerState(true);
	}

	function handleChangeLanguage(language: string) {
		i18n.changeLanguage(language);
		localStorage.setItem("language", language);
		setCurrentLanguage(language);
		setLanguageMenuIsOpen(null);
	}

	useEffect(() => {
		const storageLanguage = localStorage.getItem("language");

		storageLanguage
			? i18n.changeLanguage(storageLanguage)
			: i18n.changeLanguage("en-US");
		storageLanguage
			? setCurrentLanguage(storageLanguage)
			: setCurrentLanguage("en-US");
	}, []);

	const languagesWithoutCurrentLanguage = languages.filter(
		(a) => a.id !== currentLanguage
	);

	return (
		<>
			<Container id="Container">
				<AppBar sx={{ backgroundColor: "transparent" }}>
					<NavBar>
						<Logo>
							<img src={logo} alt="" />
						</Logo>
						<Tabs value={navValue} onChange={handleNavChange} centered>
							<Tab
								value="Home"
								sx={{ color: "primary.contrastText" }}
								component={(props) => (
									<StyledTab to="Home" tabName={t("Home")} {...props} />
								)}
							/>
							<Tab
								value="About"
								sx={{ color: "primary.contrastText" }}
								component={(props) => (
									<StyledTab to="About" tabName={t("About")} {...props} />
								)}
							/>
							<Tab
								value="Skills"
								sx={{ color: "primary.contrastText" }}
								component={(props) => (
									<StyledTab to="Skills" tabName={t("Skills")} {...props} />
								)}
							/>
							<Tab
								value="Portfolio"
								sx={{ color: "primary.contrastText" }}
								component={(props) => (
									<StyledTab
										to="Portfolio"
										tabName={t("Portfolio")}
										{...props}
									/>
								)}
							/>
							<Tab
								value="Contact"
								sx={{ color: "primary.contrastText" }}
								component={(props) => (
									<StyledTab to="Contact" tabName={t("Contact")} {...props} />
								)}
							/>
						</Tabs>

						<IconButton id="languageMenu" onClick={handleOpenLanguageMenu}>
							{currentLanguage === "en-US" ? (
								<img src={english} alt="" />
							) : currentLanguage === "pt-BR" ? (
								<img src={portuguese} alt="" />
							) : (
								<img src={spanish} alt="" />
							)}
						</IconButton>

						<Menu
							id="languageMenu"
							anchorEl={languageMenuIsOpen}
							open={openLanguageMenu}
							onClose={handleCloseLanguageMenu}
							sx={{
								"div:nth-child(3)": {
									backgroundColor: theme.palette.secondary.light,
								},
							}}
						>
							{languagesWithoutCurrentLanguage.map((language) => (
								<MenuItem key={language.id} sx={{ padding: theme.spacing(0) }}>
									<IconButton
										sx={{}}
										onClick={() => handleChangeLanguage(language.id)}
									>
										<img src={language.image} alt="" />
									</IconButton>
								</MenuItem>
							))}
						</Menu>
					</NavBar>

					<MobileNavBar>
						<Logo>
							<img src={logo} alt="" />
						</Logo>

						<Box>
							<IconButton id="languageMenu" onClick={handleOpenLanguageMenu}>
								{currentLanguage === "en-US" ? (
									<img src={english} alt="" />
								) : currentLanguage === "pt-BR" ? (
									<img src={portuguese} alt="" />
								) : (
									<img src={spanish} alt="" />
								)}
							</IconButton>

							<IconButton
								id="navMenu"
								onClick={toggleNavDrawer}
								sx={{ color: theme.palette.primary.contrastText }}
							>
								<MenuIcon />
							</IconButton>
						</Box>

						<Drawer
							anchor="right"
							open={drawerState}
							onClose={() => setDrawerState(false)}
							sx={{
								"div:nth-child(3)": {
									backgroundColor: theme.palette.secondary.main,
								},
							}}
						>
							<List sx={{ pt: "0" }}>
								<ListItem sx={{ justifyContent: "flex-end" }}>
									<IconButton
										onClick={() => setDrawerState(false)}
										sx={{ color: theme.palette.secondary.contrastText }}
									>
										<CloseIcon sx={{}} />
									</IconButton>
								</ListItem>
								<Divider sx={{ borderColor: theme.palette.secondary.light }} />
								<Tabs
									value={navValue}
									onChange={handleNavChange}
									centered
									orientation="vertical"
								>
									<Tab
										value="Home"
										sx={{
											color: "primary.contrastText",
											justifyContent: "flex-end",
										}}
										component={(props) => (
											<StyledTab to="Home" tabName={t("Home")} {...props} />
										)}
									/>
									<Tab
										value="About"
										sx={{
											color: "primary.contrastText",
											justifyContent: "flex-end",
										}}
										component={(props) => (
											<StyledTab to="About" tabName={t("About")} {...props} />
										)}
									/>
									<Tab
										value="Skills"
										sx={{
											color: "primary.contrastText",
											justifyContent: "flex-end",
										}}
										component={(props) => (
											<StyledTab to="Skills" tabName={t("Skills")} {...props} />
										)}
									/>
									<Tab
										value="Portfolio"
										sx={{
											color: "primary.contrastText",
											justifyContent: "flex-end",
										}}
										component={(props) => (
											<StyledTab
												to="Portfolio"
												tabName={t("Portfolio")}
												{...props}
											/>
										)}
									/>
									<Tab
										value="Contact"
										sx={{
											color: "primary.contrastText",
											justifyContent: "flex-end",
										}}
										component={(props) => (
											<StyledTab
												to="Contact"
												tabName={t("Contact")}
												{...props}
											/>
										)}
									/>
								</Tabs>
							</List>
						</Drawer>
					</MobileNavBar>
				</AppBar>

				<Element name="Home" id="Home">
					<MainContent>
						<Box>
							<Typography
								variant="h1"
								sx={{ color: "primary.main", fontWeight: "bold" }}
							>
								{t("Hello")}
								<Typography
									variant="h1"
									component="span"
									sx={{ color: "primary.contrastText", fontWeight: "bold" }}
								>
									.
								</Typography>
							</Typography>
							<Typography variant="h4" sx={{ marginTop: theme.spacing(-1) }}>
								{t("I'm Henrique Lourenço")}
							</Typography>
							<Typography variant="h6" sx={{}}>
								{t("Web Developer")}
							</Typography>
							<Box>
								<IconButton
									href="https://www.linkedin.com/in/henrique-lourenco/"
									target="_blank"
									aria-label="Linkedin"
									sx={{ color: "primary.main" }}
								>
									<LinkedInIcon sx={{ fontSize: theme.spacing(4) }} />
								</IconButton>
								<IconButton
									href="https://github.com/"
									target="_blank"
									aria-label="GitHub"
									sx={{ color: "primary.main" }}
								>
									<GitHubIcon sx={{ fontSize: theme.spacing(4) }} />
								</IconButton>
							</Box>
						</Box>
						<Box sx={{}}>
							<img src={computer} alt="" />
						</Box>
					</MainContent>
				</Element>

				<Element name="About" id="About">
					<AboutMe>
						<Box>
							<img src={developer} alt="" />
						</Box>

						<Box>
							<Typography
								variant="h4"
								sx={{
									color: "primary.contrastText",
									fontWeight: "bold",
									span: { color: "primary.main", fontSize: "2rem" },
								}}
							>
								{t("About")} <span>{t("me")}</span>
							</Typography>
							<AboutMeText variant="body1" sx={{}}>
								{t("About me")}
							</AboutMeText>
							<Box
								sx={{
									display: "flex",
									alignItems: "end",
									justifyContent: "flex-end",
									width: "100%",
								}}
							>
								<Button
									href={curriculumHenriqueLourenco}
									download
									variant="outlined"
									size="small"
									startIcon={<DownloadIcon />}
								>
									{t("Download CV")}
								</Button>
							</Box>
						</Box>
					</AboutMe>
				</Element>

				<Element name="Skills" id="Skills">
					<Skills>
						<Typography
							variant="h4"
							sx={{
								color: "primary.contrastText",
								fontWeight: "bold",
								marginBottom: theme.spacing(4),
								span: { color: "primary.main" },
							}}
						>
							{t("My")} <span>{t("Skills")}</span>
						</Typography>

						<Typography variant="h6" sx={{ color: "primary.contrastText" }}>
							{t("Frameworks")}
						</Typography>
						<Box>
							<SkillCard>
								<SiReact size={48} />
								<SkillTitle>React</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiNextdotjs size={48} />
								<SkillTitle>Next</SkillTitle>
							</SkillCard>
						</Box>

						<Typography variant="h6" sx={{ color: "primary.contrastText" }}>
							{t("Systems and platforms")}
						</Typography>
						<Box>
							<SkillCard>
								<SiGithub size={48} />
								<SkillTitle>GitHub</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiGit size={48} />
								<SkillTitle>Git</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiFigma size={48} />
								<SkillTitle>Figma</SkillTitle>
							</SkillCard>
						</Box>

						<Typography variant="h6" sx={{ color: "primary.contrastText" }}>
							{t("Styles")}
						</Typography>
						<Box>
							<SkillCard>
								<SiMui size={48} />
								<SkillTitle>MUI</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiBootstrap size={48} />
								<SkillTitle>Bootstrap</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiStyledcomponents size={48} />
								<SkillTitle>Styled Components</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiTailwindcss size={48} />
								<SkillTitle>Tailwind</SkillTitle>
							</SkillCard>
						</Box>

						<Typography variant="h6" sx={{ color: "primary.contrastText" }}>
							{t("Languages")}
						</Typography>
						<Box>
							<SkillCard>
								<SiTypescript size={48} />
								<SkillTitle>TypeScript</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiJavascript size={48} />
								<SkillTitle>JavaScript</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiHtml5 size={48} />
								<SkillTitle>HTML5</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiCss3 size={48} />
								<SkillTitle>CSS3</SkillTitle>
							</SkillCard>
							<SkillCard>
								<SiSass size={48} />
								<SkillTitle>Sass</SkillTitle>
							</SkillCard>
						</Box>
					</Skills>
				</Element>

				<Element name="Portfolio" id="Portfolio">
					<Portfolio sx={{ paddingTop: theme.spacing(10) }}>
						<Typography
							variant="h4"
							sx={{
								color: "primary.contrastText",
								fontWeight: "bold",
								mb: theme.spacing(2),
								span: { color: "primary.main" },
							}}
						>
							{t("Portfolio")}
						</Typography>

						<Typography
							variant="subtitle1"
							sx={{
								span: { color: "primary.main" },
								width: "50%",
								textAlign: "center",
							}}
						>
							{t("Press")}
							<span> {t("Access")} </span>
							{t("to visit the project page or the")}
							<span> {t("GitHub icon")} </span>
							{t("to access the project in my repository")}
						</Typography>

						<Grid container spacing={4} sx={{ marginTop: theme.spacing(0) }}>
							{portfolio.map((project) => (
								<Grid item xs={4} key={project.id}>
									<ProjectCard sx={{}}>
										<CardMedia
											component="img"
											sx={{ height: 150 }}
											image={project.image}
											title={project.name}
										/>
										<CardContent sx={{ height: 180 }}>
											<Typography
												gutterBottom
												variant="h5"
												color="primary.contrastText"
												sx={{}}
											>
												{project.name}
											</Typography>
											<Typography variant="body2" color="primary.contrastText">
												{t(`${project.name} Description`)}
											</Typography>
										</CardContent>
										<CardActions
											sx={{
												display: "flex",
												justifyContent: "space-between",
												width: "100%",
											}}
										>
											{!!project.siteUrl ? (
												<Button
													href={project.siteUrl}
													target="_blank"
													size="small"
													sx={{
														color: "primary.contrastText",
														"&:hover": { color: "primary.main" },
													}}
												>
													{t("Access")}
												</Button>
											) : (
												<Button
													variant="outlined"
													disabled
													href={project.siteUrl}
													target="_blank"
													size="small"
													sx={{
														opacity: 0,
														color: "primary.contrastText",
														"&:hover": { color: "primary.main" },
													}}
												>
													{t("Access")}
												</Button>
											)}
											<IconButton
												href={project.siteUrl}
												target="_blank"
												sx={{
													color: "primary.contrastText",
													transition: "0.4s",
													"&:hover": { color: "primary.main" },
												}}
											>
												<SiGithub />
											</IconButton>
										</CardActions>
									</ProjectCard>
								</Grid>
							))}
						</Grid>
					</Portfolio>

					<MobilePortfolio sx={{ paddingTop: theme.spacing(10) }}>
						<Typography
							variant="h4"
							sx={{
								color: "primary.contrastText",
								fontWeight: "bold",
								mb: theme.spacing(2),
								span: { color: "primary.main" },
							}}
						>
							{t("Portfolio")}
						</Typography>

						<Typography
							variant="subtitle1"
							sx={{
								span: { color: "primary.main" },
								width: "50%",
								textAlign: "center",
							}}
						>
							{t("Press")}
							<span> {t("Access")} </span>
							{t("to visit the project page or the")}
							<span> {t("GitHub icon")} </span>
							{t("to access the project in my repository")}
						</Typography>

						<Grid container spacing={3} sx={{ marginTop: theme.spacing(0) }}>
							{portfolio.map((project) => (
								<Grid item xs={6} key={project.id}>
									<ProjectCard sx={{}}>
										<CardMedia
											component="img"
											sx={{ height: 150 }}
											image={project.image}
											title={project.name}
										/>
										<CardContent sx={{ height: theme.spacing(22) }}>
											<Typography
												gutterBottom
												variant="h5"
												color="primary.contrastText"
												sx={{}}
											>
												{project.name}
											</Typography>
											<Typography
												variant="body2"
												color="primary.contrastText"
												sx={{ overflow: "auto", height: "80%" }}
											>
												{t(`${project.name} Description`)}
											</Typography>
										</CardContent>
										<CardActions
											sx={{
												display: "flex",
												justifyContent: "space-between",
												width: "100%",
												marginTop: theme.spacing(2),
											}}
										>
											{!!project.siteUrl ? (
												<Button
													href={project.siteUrl}
													target="_blank"
													size="small"
													sx={{
														color: "primary.contrastText",
														"&:hover": { color: "primary.main" },
													}}
												>
													{t("Access")}
												</Button>
											) : (
												<Button
													variant="outlined"
													disabled
													href={project.siteUrl}
													target="_blank"
													size="small"
													sx={{
														opacity: 0,
														color: "primary.contrastText",
														"&:hover": { color: "primary.main" },
													}}
												>
													{t("Access")}
												</Button>
											)}
											<IconButton
												href={project.siteUrl}
												target="_blank"
												sx={{
													color: "primary.contrastText",
													transition: "0.4s",
													"&:hover": { color: "primary.main" },
												}}
											>
												<SiGithub />
											</IconButton>
										</CardActions>
									</ProjectCard>
								</Grid>
							))}
						</Grid>
					</MobilePortfolio>
				</Element>

				<Element name="Contact" id="Contact">
					<Contact>
						<Typography
							variant="h4"
							sx={{
								color: "primary.contrastText",
								fontWeight: "bold",
								display: "flex",
								justifyContent: "center",
								paddingTop: theme.spacing(16),
							}}
						>
							{t("Contact")}
						</Typography>

						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "start",
									justifyContent: "center",
									gap: theme.spacing(2),
								}}
							>
								<ContactContent
									href="https://www.linkedin.com/in/henrique-lourenco/"
									target="_blank"
								>
									<LinkedInIcon fontSize="large" />
									<Typography>Henrique Lourenço</Typography>
								</ContactContent>

								<ContactContent
									href="https://github.com/LourencoHenri"
									target="_blank"
								>
									<GitHubIcon fontSize="large" />
									<Typography>LourencoHenri</Typography>
								</ContactContent>

								<ContactContent sx={{ cursor: "default" }}>
									<EmailIcon fontSize="large" />
									<Typography>henri.lourenco@outlook.com</Typography>
								</ContactContent>

								<ContactContent sx={{ cursor: "default" }}>
									<PhoneIcon fontSize="large" />
									<Typography>+55 13 99113-5761</Typography>
								</ContactContent>
							</Box>

							<Box
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									textAlign: "center",
								}}
							>
								<Typography variant="h4">{t("Contact me")}</Typography>
								<Typography
									variant="h2"
									sx={{ color: "primary.main", fontWeight: "bold" }}
								>
									Let's work together
									<Typography
										variant="h2"
										component="span"
										sx={{ color: "primary.contrastText", fontWeight: "bold" }}
									>
										!
									</Typography>
								</Typography>
							</Box>
						</Box>
					</Contact>
				</Element>

				<Divider sx={{ borderColor: theme.palette.secondary.contrastText }} />
			</Container>

			<Footer sx={{}}>
				<Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
					Web illustrations by Storyset
				</Typography>
				<Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
					|
				</Typography>
				<Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
					Design by Henrique Lourenço
				</Typography>
			</Footer>
		</>
	);
}
