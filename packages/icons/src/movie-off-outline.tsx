import { mdiMovieOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOffOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOffOutline} {...props} />;
}

export { mdiMovieOffOutline as path };
