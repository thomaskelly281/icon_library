import { mdiMoviePlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoviePlayOutline(props: IconComponentProps) {
  return <Icon path={mdiMoviePlayOutline} {...props} />;
}

export { mdiMoviePlayOutline as path };
