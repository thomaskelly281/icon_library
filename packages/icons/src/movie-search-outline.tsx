import { mdiMovieSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieSearchOutline} {...props} />;
}

export { mdiMovieSearchOutline as path };
