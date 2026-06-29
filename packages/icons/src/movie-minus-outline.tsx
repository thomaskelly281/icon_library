import { mdiMovieMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieMinusOutline} {...props} />;
}

export { mdiMovieMinusOutline as path };
