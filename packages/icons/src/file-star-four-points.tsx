import { mdiFileStarFourPoints } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileStarFourPoints(props: IconComponentProps) {
  return <Icon path={mdiFileStarFourPoints} {...props} />;
}

export { mdiFileStarFourPoints as path };
