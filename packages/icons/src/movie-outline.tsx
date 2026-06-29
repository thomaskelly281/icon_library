import { mdiMovieOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOutline} {...props} />;
}

export { mdiMovieOutline as path };
