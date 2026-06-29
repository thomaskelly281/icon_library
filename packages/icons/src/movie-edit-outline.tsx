import { mdiMovieEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieEditOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieEditOutline} {...props} />;
}

export { mdiMovieEditOutline as path };
