import { mdiDogService } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DogService(props: IconComponentProps) {
  return <Icon path={mdiDogService} {...props} />;
}

export { mdiDogService as path };
