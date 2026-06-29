import { mdiMovieOpenMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenMinusOutline} {...props} />;
}

export { mdiMovieOpenMinusOutline as path };
