import { mdiMovieCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MovieCog(props: IconComponentProps) {
  return <Icon path={mdiMovieCog} {...props} />;
}

export { mdiMovieCog as path };
