import { mdiMoviePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MoviePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiMoviePlusOutline} {...props} />;
}

export { mdiMoviePlusOutline as path };
