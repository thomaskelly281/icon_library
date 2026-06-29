import { mdiMovieOpenEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenEditOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenEditOutline} {...props} />;
}

export { mdiMovieOpenEditOutline as path };
