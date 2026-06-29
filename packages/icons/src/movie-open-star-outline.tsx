import { mdiMovieOpenStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenStarOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenStarOutline} {...props} />;
}

export { mdiMovieOpenStarOutline as path };
