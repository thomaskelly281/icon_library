import { mdiPipe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pipe(props: IconComponentProps) {
  return <Icon path={mdiPipe} {...props} />;
}

export { mdiPipe as path };
