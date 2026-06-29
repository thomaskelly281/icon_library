import { mdiMovieOpenOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenOutline} {...props} />;
}

export { mdiMovieOpenOutline as path };
