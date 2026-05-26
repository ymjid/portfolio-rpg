export const GithubUsername = "ymjid";

export interface GithubReadme {
  content: string;
  encoding: string;
  name: string; 
}

export enum CharState {
    LOOKINGJOB = "Looking for job",
    WORKING = "Working",
}

export interface Character {
    name: string;
    class: string;
    img?: string;
    github?: string;
    state: CharState;
}

export const CHARACTER: Character = {
    name: "Yan",
    class: "Integrator → Front-end developer",
    state: CharState.LOOKINGJOB,
    github: `https://github.com/${GithubUsername}`
}

export type QuestStateType = {
    text: string;
    icon:  string;
}
export const QuestState = {
    PROGRESS: {
        text: "progress",
        icon:  "◈",
    },
    COMPLETED: {
        text: "completed",
        icon: "✓",
    },
    FAILED: {
        text: "failed",
        icon: "✗",
    },
    LOCKED: {
        text: "locked",
        icon: "⊘",
    },
}

export enum TagsType {
    HTML = "HTML",
    CSS = "CSS",
    JAVASCRIPT = "JavaScript",
    TYPESCRIPT = "TypeScript",
    ANGULAR = "Angular",
    SCSS = "SCSS",
    PHP = "PHP",
}

export enum ThemeType {
    SNAKE = "theme-snake",
    VIDEO = "theme-video",
}

export type QuestImage = {
    url: string,
    alt: string,
}

export interface SubQuest {
    name: string,
    state: QuestStateType
}

export interface Quest {
    id: string,
    name: string,
    description: string, 
    release: string
    tags: TagsType[],
    subquests: SubQuest[],
    state: QuestStateType,
    preview?: string,
    theme?: ThemeType,
    images?: QuestImage[],
    code?: string,
}

export const QUESTS: Quest[] = [
    {
        id: "1",
        name: "Snake",
        description: `The aim of the project is to create a snake game. 
        This is an improvement of the snake game created for a C project done during my studies. The project uses HTML, CSS, Javascript.
        It's a personal project done during the year 2024.`,
        release: "2024",
        tags: [
            TagsType.JAVASCRIPT,
            TagsType.CSS,
            TagsType.HTML,
        ],
        subquests: [
                {
                    name: "Customizable controls",
                    state: QuestState.COMPLETED
                },
                                {
                    name: "Create your custom snake levels with the Snake Editor",
                    state: QuestState.COMPLETED
                },
                                {
                    name: "Import & export custom snake levels created from the editor",
                    state: QuestState.COMPLETED
                },
                                {
                    name: "Offline leaderboards",
                    state: QuestState.COMPLETED
                }
        ],
        state: QuestState.COMPLETED,
        preview: "https://ymjid.github.io/Snake/snake.html",
        theme: ThemeType.SNAKE,
        images: [
            {
                url:"https://raw.githubusercontent.com/ymjid/Snake/main/assets/img/media/Screenshot1.png",
                alt:"Stage 1",
            },
            {
                url:"https://raw.githubusercontent.com/ymjid/Snake/main/assets/img/media/Screenshot2.png",
                alt:"Leaderboard",
            },
            {
                url:"https://raw.githubusercontent.com/ymjid/Snake/main/assets/img/media/Screenshot3.png",
                alt:"Stage 2",
            },
            {
                url:"https://raw.githubusercontent.com/ymjid/Snake/main/assets/img/media/Screenshot4.png",
                alt:"Snake Editor",
            },
            {
                url:"https://raw.githubusercontent.com/ymjid/Snake/main/assets/img/media/Screenshot5.png",
                alt:"Level Selection",
            }
        ],
        code: "https://github.com/ymjid/Snake",
    },
    {
        id: "2",
        name: "VideoListMaker",
        description: `The aim of the project is to be able to create video lists. 
        The main restriction is to be a standalone project, no database used. The script uses the site tree structure to find lists, images & videos. 
        The project uses HTML, CSS, Javascript & PHP
        It's a personal project done during the year 2023.`,
        release: "2023",
        tags: [
            TagsType.JAVASCRIPT,
            TagsType.CSS,
            TagsType.HTML,
            TagsType.PHP,
        ],
        subquests: [
                {
                    name: "Manage video lists",
                    state: QuestState.COMPLETED
                },
                                {
                    name: "Upload & remove videos",
                    state: QuestState.COMPLETED
                },
                                {
                    name: "Add & remove subtitles to videos",
                    state: QuestState.COMPLETED
                }
        ],
        state: QuestState.COMPLETED,
        preview: "",
        theme: ThemeType.VIDEO,
        code: "https://github.com/ymjid/VideoListMaker",
    },
    {
        id: "3",
        name: "Portfolio RPG",
        description: "The aim of the project is to create a portfolio with demos for projects.",
        release: "2026",
        tags: [
            TagsType.ANGULAR,
            TagsType.SCSS,
            TagsType.TYPESCRIPT,
        ],
        subquests: [
                {
                    name: "Conception & content",
                    state: QuestState.COMPLETED
                },
                {
                    name: "Angular Architecture",
                    state: QuestState.COMPLETED
                },
                {
                    name: "Development",
                    state: QuestState.PROGRESS
                },
                {
                    name: "Deployment",
                    state: QuestState.LOCKED
                }
        ],
        state: QuestState.PROGRESS,
        preview: "",
    }
]

export enum SkillType {
    HTML_CSS = "HTML/CSS",
    JAVASCRIPT = "Javascript",
    TYPESCRIPT = "TypeScript",
    ANGULAR = "Angular",
    SCSS = "SCSS",
    GIT = "Git"
}

export const SkillRate = {
    BASIC: { name: "Basic Knowledge", value: 1 },
    INTERMEDIATE: { name: "Intermediate", value: 2 },
    EASE: { name: "At ease", value: 3 },
}
export type SkillRateType = {
    name: string,
    value: number,
}

export interface Skill {
    name: SkillType;
    rate: SkillRateType;
}

export const SKILLS: Skill[] = [
    {
        name: SkillType.HTML_CSS,
        rate: SkillRate.EASE,
    },
    {
        name: SkillType.JAVASCRIPT,
        rate: SkillRate.INTERMEDIATE,
    },
    {
        name: SkillType.TYPESCRIPT,
        rate: SkillRate.INTERMEDIATE,
    },
    {
        name: SkillType.ANGULAR,
        rate: SkillRate.BASIC,
    },
    {
        name: SkillType.GIT,
        rate: SkillRate.INTERMEDIATE,
    },
    {
        name: SkillType.SCSS,
        rate: SkillRate.BASIC,
    }
]