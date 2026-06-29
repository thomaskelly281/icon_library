import { mdiMovieOpenCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenCheckOutline} {...props} />;
}

export { mdiMovieOpenCheckOutline as path };
