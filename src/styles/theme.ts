const theme = {
    colors: {
        text: "#3A3A3A",
        background: "#F0F0F0",
    },
};

export type Theme = typeof theme;
export default theme;

declare module "styled-components" {
    interface DefaultTheme extends Theme {}
}
