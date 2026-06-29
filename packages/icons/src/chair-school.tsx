import { mdiChairSchool } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChairSchool(props: IconComponentProps) {
  return <Icon path={mdiChairSchool} {...props} />;
}

export { mdiChairSchool as path };
