import { mdiSchool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function School(props: IconComponentProps) {
  return <Icon path={mdiSchool} {...props} />;
}

export { mdiSchool as path };
