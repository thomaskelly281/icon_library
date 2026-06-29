import { mdiMovieFilterOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieFilterOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieFilterOutline} {...props} />;
}

export { mdiMovieFilterOutline as path };
