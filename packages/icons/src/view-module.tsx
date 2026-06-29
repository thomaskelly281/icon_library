import { mdiViewModule } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewModule(props: IconComponentProps) {
  return <Icon path={mdiViewModule} {...props} />;
}

export { mdiViewModule as path };
