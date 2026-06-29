import { mdiMovieOpenOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenOffOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenOffOutline} {...props} />;
}

export { mdiMovieOpenOffOutline as path };
