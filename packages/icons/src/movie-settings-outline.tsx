import { mdiMovieSettingsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieSettingsOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieSettingsOutline} {...props} />;
}

export { mdiMovieSettingsOutline as path };
