import { mdiMovieCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieCheckOutline} {...props} />;
}

export { mdiMovieCheckOutline as path };
