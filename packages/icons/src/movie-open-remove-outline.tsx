import { mdiMovieOpenRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenRemoveOutline} {...props} />;
}

export { mdiMovieOpenRemoveOutline as path };
