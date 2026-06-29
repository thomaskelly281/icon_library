import { mdiMovieCogOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieCogOutline(props: IconComponentProps) {
  return <Icon path={mdiMovieCogOutline} {...props} />;
}

export { mdiMovieCogOutline as path };
