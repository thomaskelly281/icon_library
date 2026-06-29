import { mdiMovieOpenPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieOpenPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieOpenPlusOutline} {...props} />;
}

export { mdiMovieOpenPlusOutline as path };
