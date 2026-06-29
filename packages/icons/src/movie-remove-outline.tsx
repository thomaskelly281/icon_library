import { mdiMovieRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieRemoveOutline} {...props} />;
}

export { mdiMovieRemoveOutline as path };
