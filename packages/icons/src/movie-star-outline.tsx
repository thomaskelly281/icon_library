import { mdiMovieStarOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieStarOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieStarOutline} {...props} />;
}

export { mdiMovieStarOutline as path };
