import { mdiDeveloperBoard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeveloperBoard(props: IconComponentProps) {
  return <Icon path={mdiDeveloperBoard} {...props} />;
}

export { mdiDeveloperBoard as path };
