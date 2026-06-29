import { mdiStarPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarPlus(props: IconComponentProps) {
  return <Icon path={mdiStarPlus} {...props} />;
}

export { mdiStarPlus as path };
