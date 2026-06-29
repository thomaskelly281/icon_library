import { mdiThemeLightDark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThemeLightDark(props: IconComponentProps) {
  return <Icon path={mdiThemeLightDark} {...props} />;
}

export { mdiThemeLightDark as path };
