import { mdiMovieOpenPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenPlayOutline} {...props} />;
}

export { mdiMovieOpenPlayOutline as path };
